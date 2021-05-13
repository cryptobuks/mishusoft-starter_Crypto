<?php if (isset($this->pagination)): ?>
    <table class="table">
        <tr>
            <td style="width:100px">
                <div class="text-align-left">
                    Pages <?php echo $this->pagination['current']; ?> of <?php echo $this->pagination['total']; ?>.
                </div>
            </td>
            <td>
                <div class="text-align-center">
                    <div class="pagination">
                        <!--left align symbols-->
                        <?php if ($this->pagination['first']): ?>
                            <a class="page" data-page="<?php echo $this->pagination['first']; ?>"
                               href="javascript:void(0)">&#x00AB;/a>
                        <?php else: ?>
                            <a>&#x00AB;</a>
                        <?php endif; ?>
                        <?php if ($this->pagination['previous']): ?>
                            <a class="page" data-page="<?php echo $this->pagination['previous']; ?>"
                               href="javascript:void(0)">&#10094;</a>
                        <?php else: ?>
                            <a>&#10094;</a>
                        <?php endif; ?>

                        <!--pagination-->
                        <?php for ($i = 0; $i < count($this->pagination['range']); $i++): ?>
                            <?php if ($this->pagination['current'] === $this->pagination['range'][$i]): ?>
                                <a class="active"><?php echo $this->pagination['range'][$i]; ?></a>
                            <?php else: ?>
                                <a class="page" data-page="<?php echo $this->pagination['range'][$i]; ?>"
                                   href="javascript:void(0)"><?php echo $this->pagination['range'][$i]; ?></a>
                            <?php endif; ?>
                        <?php endfor; ?>

                        <!--right align symbols-->
                        <?php if ($this->pagination['next']): ?>
                            <a class="page" data-page="<?php echo $this->pagination['next']; ?>"
                               href="javascript:void(0)">&#10095;</a>
                        <?php else: ?>
                            <a>&#10095;</a>
                        <?php endif; ?>

                        <?php if ($this->pagination['last']): ?>
                            <a class="page" data-page="<?php echo $this->pagination['last']; ?>"
                               href="javascript:void(0)">&#x00BB;</a>
                        <?php else: ?>
                            <a>&#x00BB;</a>
                        <?php endif; ?>
                    </div>
                </div>
            </td>
        </tr>
    </table>
<?php endif; ?>

